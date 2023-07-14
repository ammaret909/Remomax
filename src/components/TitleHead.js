export default function Title(props) {
  const { title } = props;
  return (
    <div className="rounded-box shadow-xl bg-white p-6 row m-2">
      <div className="text-xl">{title}</div>
    </div>
  );
}
