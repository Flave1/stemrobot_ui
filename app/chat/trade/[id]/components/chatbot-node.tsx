import { AgentState } from '../agent-types';
import { Bot, Loader2, User } from 'lucide-react';
import { cn } from '@/lib/utils';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@mui/material';

interface ChatbotNodeProps {
  nodeState: Partial<AgentState>;
}

export function ChatbotNode({ nodeState }: ChatbotNodeProps) {

  if (nodeState?.trade_update?.[0]?.status) {
    return (
      <div className="flex justify-end">
        <Card className="inline-block">
          <CardContent className="p-2">
            <div className="flex items-center gap-2">
              <Loader2 className="w-6 h-6 animate-spin" />
              <div className="text-sm">{nodeState?.trade_update?.[0]?.status}</div>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  const getMessageStyles = (type: string) => {
    const isUser = type === 'user' || type === 'human';
    
    return {
      container: cn(
        "flex items-start gap-3 max-w-[80%] mb-4",
        isUser ? "ml-auto flex-row-reverse" : "mr-auto"
      ),
      bubble: cn(
        "p-3 rounded-lg",
        isUser ? 
          "bg-primary text-primary-foreground rounded-br-none" : 
          "bg-muted rounded-bl-none"
      ),
      icon: {
        wrapper: cn(
          "flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full",
          isUser ? "bg-primary/10" : "bg-muted/50"
        ),
        component: isUser ? 
          <User className="h-5 w-5" /> : 
          <Bot className="h-5 w-5" />
      }
    };
  };

  return (
    <div className="space-y-4 font-mono">
      {nodeState?.messages?.map((msg, index) => {
        const styles = getMessageStyles(msg.type);
        
        return (
          <div key={msg.id ?? index} className={styles.container}>
            <div className={styles.icon.wrapper}>
              {styles.icon.component}
            </div>
            <div className={styles.bubble}>
              <div className="text-sm break-words">
                <ReactMarkdown
                  remarkPlugins={[remarkGfm]}
                  className="prose prose-sm dark:prose-invert max-w-none overflow-hidden"
                  components={{
                    p: ({ children }) => (
                      <p className="mb-2 break-words leading-relaxed">{children}</p>
                    ),
                    code: ({ children, className }) => {
                      const isInline = !className?.includes('language-');
                      return (
                        <code className={cn(
                          "px-1 py-0.5 rounded font-mono text-sm",
                          isInline ? "bg-muted/50" : "block bg-muted p-2 my-2 overflow-x-auto"
                        )}>
                          {children}
                        </code>
                      );
                    },
                    pre: ({ children }) => (
                      <pre className="bg-muted p-2 rounded my-2 overflow-x-auto">{children}</pre>
                    ),
                    ul: ({ children }) => (
                      <ul className="list-disc pl-4 mb-2 space-y-1">{children}</ul>
                    ),
                    ol: ({ children }) => (
                      <ol className="list-decimal pl-4 mb-2 space-y-1">{children}</ol>
                    ),
                  }}
                >
                  {msg.content}
                </ReactMarkdown>
              </div>
              {msg.tool_calls && msg.tool_calls.length > 0 && (
                <div className="flex items-center gap-2 mt-2 text-xs">
                  <span className="opacity-70">Tools used:</span>
                  <div className="flex flex-wrap gap-1">
                    {msg.tool_calls?.map((toolCall) => (
                      <Badge 
                        key={toolCall.id} 
                        variant="outline" 
                        className="text-xs"
                      >
                        {toolCall.name}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}