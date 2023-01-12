const Checkbox = ({ id, label }: CheckboxProps) => {
  return (
    <div className="flex gap-5 items-center mt-4 first:mt-12">
      <input className="accent-neon-green h-5 w-5" type="checkbox" id={id} />
      <label className="text-base" htmlFor={id}>
        {label}
      </label>
    </div>
  );
};

type CheckboxProps = {
  id: string;
  label: string;
};

export default Checkbox;
