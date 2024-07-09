import Button from "./Button";

function InputFieldWithButton({
  btnText,
  mainStyle,
  btnStyle,
  inputtype,
  inputStyle,
  placeholder,
  btnDivStyle,
  subBtn,
  onChange,
  onBlur,
  value,
  loading
}) {
  return (
    <div
      className={` w-full rounded-[30px] bg-[white] flex mt-[34px] lg:mt-[53px] md:mt-[39px]  border-[#AFAFAF] border-solid focus:outline-none focus:border-transparent focus:ring-0 border-[1px] ${mainStyle} max-h-[54px]`}
    >
      <input
        name="email"
        onChange={onChange}
        value={value}
        onFocus={onBlur}
        type={inputtype}
        className={`${inputStyle} w-full   leading-[24px] tracking-[0.1px] outline-none   p-[17px]  py-[16px] `}
        placeholder={placeholder}
      />
      {subBtn && (
        <div className={`${btnDivStyle} w-full`}>
          <button
            disabled={loading}
            type="submit"
            className={`${btnStyle} relative rounded-[30px] w-full hover:scale-105 font-proximaNova  transition-all duration-100 ease-linear`}
          >
            {!loading ? btnText : <div class="loader"></div>}
          </button>
        </div>
      )}
    </div>
  );
}

export default InputFieldWithButton;
