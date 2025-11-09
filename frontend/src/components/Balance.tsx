export const Balance = (props: any) => {
  return (
    <div className="flex h-10 items-center mt-4 ml-5">
      <div className="text-xl font-semibold">Your Balance : ${props.balance}</div>
    </div>
  );
};
