export default function Thumbnail({ fileInput }) {
  return (
    <>
      <label htmlFor="thumbnail">
        <input
          type="file"
          name="thumbnail"
          ref={fileInput}
          //   onChange={(e) => {
          //     setComment({ ...comment, username: `${e.target.value}` });
          //   }}
        />
      </label>
    </>
  );
}
