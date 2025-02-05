// import { OpenAIStream, StreamingTextResponse } from "ai"
// import { NextResponse } from "next/server"
import { Configuration, OpenAIApi } from "openai-edge"
import { type CoreMessage, OpenAIStream, StreamingTextResponse, streamText } from "ai"

// export async function POST(req: Request) {
//     try {
//         const body = await req.json()
//         const { fullName, email, phone, address, additionalInfo } = body

//         // Here you would typically:
//         // 1. Validate the input
//         // 2. Store the information in your database
//         // 3. Send an email notification to your team
//         // 4. Integrate with your CRM system if applicable

//         // For now, we'll just log the information and return a success response
//         console.log("Received contact information:", { fullName, email, phone, address, additionalInfo })

//         return NextResponse.json({ message: "Contact information received successfully" }, { status: 200 })
//     } catch (error) {
//         console.error("Error processing contact information:", error)
//         return NextResponse.json({ error: "An error occurred while processing your request" }, { status: 500 })
//     }
// }


const config = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
})
const openai = new OpenAIApi(config)

export const runtime = "edge"

export async function POST(req: Request) {
    const { messages } = await req.json()

    const response = await openai.createChatCompletion({
        model: "gpt-4o",
        stream: true,
        messages: [
            {
                role: "system",
                content:
                    "You are a helpful assistant for a trading platform called Stembots. Your task is to collect user information for contact purposes. Ask for their full name, email, phone, address, and any additional information they want to share. Be conversational and friendly.",
            },
            ...messages,
        ],
    })

    const stream = OpenAIStream(response)
    return new StreamingTextResponse(stream)
}








