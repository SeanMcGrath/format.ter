import Wrapper from "@/components/wrapper";
import H1 from "@/components/typo/H1";
import H2 from "@/components/typo/H2";
import BlockQuotes from "@/components/typo/BlockQuotes";

const Home = () => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-1 pt-16">
        <Wrapper className="flex-1 p-8">
          <H1>Welcome to format.ter</H1>
          <H2>A Collection of Useful Tools for Software Engineers</H2>
          <BlockQuotes>
            Simplify your development workflow with our handy tools
          </BlockQuotes>
        </Wrapper>
      </div>
    </div>
  );
};

export default Home;
