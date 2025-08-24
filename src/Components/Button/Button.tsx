const Button = ({ Name, action }: { Name: string; action?: () => void }) => {
  return (
    <button
      className="bg-[#4076f0] text-white text-base rounded-sm p-1 h-auto cursor-pointer"
      onClick={action}
    >
      {Name}
    </button>
  );
};

export default Button;
