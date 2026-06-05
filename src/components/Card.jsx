export default function Card({ children }) {
	return (
		<div className="flex items-center space-x-5 bg-white rounded-lg shadow-md p-4">
		      {children}
		</div>
  );
}