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
import { Copy } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Base64Encoder = () => {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [error, setError] = useState("");
  const { toast } = useToast();

  const encodeBase64 = () => {
    try {
      const encoded = btoa(input);
      setOutput(encoded);
      setError("");
    } catch (err) {
      setError("Invalid input. Please check your text.");
      setOutput("");
    }
  };

  const decodeBase64 = () => {
    try {
      const decoded = atob(input);
      setOutput(decoded);
      setError("");
    } catch (err) {
      setError("Invalid Base64 input. Please check your text.");
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
        <CardTitle>Base64 Encoder/Decoder</CardTitle>
        <CardDescription>
          Encode text to Base64 or decode Base64 to text.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-4">
          <Textarea
            placeholder="Enter text or Base64"
            className={cn("bg-muted/20", error && "border-red-500")}
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <div className="flex gap-2">
            <Button onClick={encodeBase64}>Encode</Button>
            <Button onClick={decodeBase64}>Decode</Button>
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

export default Base64Encoder;
