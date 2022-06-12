const size = {
  mobile: '600px',
  tablet: '800px',
};
const breakpoint = {
  mobile: `(max-width:${size.mobile})`,
  tablet: `(min-width: 740px) and (max-width: ${size.tablet})`,
};

export default breakpoint;
