import { cn } from "@/lib/utils";

type WrapperProps = React.HTMLAttributes<HTMLDivElement>;

const Wrapper = ({ children, className, ...props }: WrapperProps) => {
  return (
    <div className="flex-1">
      <div className={cn(["w-full h-full px-6 pt-20", className])} {...props}>
        {children}
      </div>
    </div>
  );
};

export default Wrapper;
