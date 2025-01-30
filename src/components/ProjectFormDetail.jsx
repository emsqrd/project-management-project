export default function ProjectFormDetail({ detailContainer = 'input', label, inputType }) {
  const DetailContainer = detailContainer;
  return (
    <div className="mt-2">
      <label className="text-sm font-bold uppercase text-stone-500">{label}</label>
      <DetailContainer
        className="w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600"
        type={inputType}
      />
    </div>
  );
}
