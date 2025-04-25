const HeadingComponent = (props: { heading: string }) => {
  return (
    <h1 className="m-2 mt-12 text-2xl font-extrabold text-white">
      {props.heading}
    </h1>
  );
};

export default HeadingComponent;
