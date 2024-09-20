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
import { minify } from "terser";

const JsMinifier = () => {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [error, setError] = useState("");
  const { toast } = useToast();

  const minifyJs = async () => {
    try {
      const result = await minify(input, {
        mangle: true,
        compress: {
          dead_code: true,
          drop_debugger: true,
          conditionals: true,
          evaluate: true,
          booleans: true,
          loops: true,
          unused: true,
          hoist_funs: true,
          keep_fargs: false,
          hoist_vars: true,
          if_return: true,
          join_vars: true,
          side_effects: true,
        },
      });

      if (result.code) {
        setOutput(result.code);
        setError("");
      } else {
        throw new Error("Minification resulted in empty code");
      }
    } catch (err) {
      setError("Error minifying JavaScript. Please check your input.");
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
        <CardTitle>JavaScript Minifier</CardTitle>
        <CardDescription>
          Minify your JavaScript code to reduce its size using Terser.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-4">
          <Textarea
            placeholder="Enter JavaScript code"
            className={cn("bg-muted/20", error && "border-red-500")}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            rows={10}
          />
          <div className="flex gap-2">
            <Button onClick={minifyJs}>Minify</Button>
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

export default JsMinifier;
