import { useField } from "formik";

export default function CustomSelect({ label, ...props }: any) {
  const [field, meta] = useField(props);

  return (
    <>
      <label htmlFor="">{label}</label>
      <select
        {...field}
        {...props}
        className={meta.touched && meta.error ? "text-red-500" : ""}
      />
    </>
  );
}
