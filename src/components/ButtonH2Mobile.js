export default function ButtonH2Mobile(props) {
  const { topic } = props;
  return (
    <div className="btn block py-2 px-4 text-sm btn-ghost runded-btn text-white">
      {topic}
    </div>
  );
}
