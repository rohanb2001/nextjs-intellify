import FeaturesTwoSection from "@/components/FeaturesTwoSection";
import Container from "@/components/Container";
import PostGrid from "./PostGrid";

const AllPosts = (props) => {
  const { title } = props;
  return (
    <>
      <FeaturesTwoSection />
      <h1 className="relative left-48 mb-20 text-[40px] underline decoration-2 decoration-[#3d3f47]">
        {title}
      </h1>
      <Container classNames="w-[70%] mb-72">
        <PostGrid />
      </Container>
    </>
  );
};

export default AllPosts;
