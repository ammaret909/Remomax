export default function ButtonH2Mobile(props) {
  const { topic } = props;
  return (
    <div className="btn grid content-center px-4 text-sm hover:rmx_blue rmx_blue text-white">
      {topic}
    </div>
  );
}
