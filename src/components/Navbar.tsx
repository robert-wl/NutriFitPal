export default function Navbar() {
  return (
    <div className="flex justify-between bg-white items-center px-8 py-4 sticky top-0 shadow-md">
      <h1 className="text-primary font-bold text-3xl">NutriFitPal</h1>
      <div className="space-x-5">
        <button className="border-secondary border transition-colors rounded-md hover:bg-secondary hover:text-white inline-flex items-center justify-center py-2 px-5 text-center text-base font-medium text-secondary">
          Login
        </button>
        <button className="border-secondary border transition-colors rounded-md hover:bg-secondary hover:text-white inline-flex items-center justify-center py-2 px-5 text-center text-base font-medium text-secondary">
          Sign Up
        </button>
      </div>
    </div>
  );
}
