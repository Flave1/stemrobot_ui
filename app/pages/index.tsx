import { CopilotKit } from "@copilotkit/react-core";
import HeroSection from "../components/HeroSection";
import "@copilotkit/react-ui/styles.css";
import { CopilotPopup } from "@copilotkit/react-ui";
export default function Index() {
  return (
    <>
      <CopilotKit runtimeUrl="/pages/api/copilotkit" agent="search_agent">
        <HeroSection />
        <CopilotPopup
          instructions={
            "You are assisting the user as best as you can. Answer in the best way possible given the data you have."
          }
          labels={{
            title: "Forex market robot",
            initial: "What do you want me to do?",
          }}
        />
      </CopilotKit>
    </>
  );
}
