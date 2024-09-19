import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { Copy } from "lucide-react"; // Import the Copy icon
import { useToast } from "@/hooks/use-toast";

const JsonFormatter = () => {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [error, setError] = useState("");
  const { toast } = useToast();

  const formatJson = () => {
    try {
      const parsed = JSON.parse(input);
      const formatted = JSON.stringify(parsed, null, 2);
      setOutput(formatted);
      setError("");
    } catch (err) {
      setError("Invalid JSON. Please check your input.");
      setOutput("");
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(output);
    toast({
      description: "Copied to clipboard",
      duration: 2000,
    });
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>JSON Formatter</CardTitle>
        <CardDescription>
          Pretty-print JSON data in a more readable format.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-4">
          <Textarea
            placeholder="Enter JSON data"
            className={cn("bg-muted/20", error && "border-red-500")}
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <div className="flex gap-2">
            <Button onClick={formatJson}>Format!</Button>
          </div>
          {error && <p className="text-sm text-red-500">{error}</p>}
          {output && (
            <>
              <Textarea
                className="bg-muted/20"
                value={output}
                readOnly
                rows={10}
              />
              <div className="flex justify-end">
                <Button onClick={copyToClipboard} className="gap-2">
                  <Copy className="w-4 h-4" />
                  Copy
                </Button>
              </div>
            </>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default JsonFormatter;
