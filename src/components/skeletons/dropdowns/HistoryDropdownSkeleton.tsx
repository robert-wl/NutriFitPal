export default function HistoryDropdownSkeleton() {
  return (
    <div className="grid flex-1 rounded-lg bg-white border">
      <button className="flex justify-between items-center rounded-md p-4 text-gray-700 text-start">
        <div className="h-5 bg-gray-200 rounded-full w-96 mb-4" />
        <div className="h-5 bg-gray-200 rounded-full w-6 mb-4" />
      </button>
    </div>
  );
}
