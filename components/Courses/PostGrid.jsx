import PostItem from "./PostItem";

const PostGrid = () => {
  return (
    <>
      <ul className="grid gap-x-4 gap-y-6 grid-cols-3">
        <PostItem />
      </ul>
    </>
  );
};

export default PostGrid;
