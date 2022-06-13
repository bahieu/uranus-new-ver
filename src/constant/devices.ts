const size = {
  mobile: '767px',
  tablet: '1023px',
};
const breakpoint = {
  mobile: `(max-width:${size.mobile})`,
  tablet: `(min-width: 768px) and (max-width: ${size.tablet})`,
};

export default breakpoint;
