import { forwardRef } from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';
// @ts-ignore
const Page: React.FC<any> = forwardRef<any>(
  // @ts-ignore
  ({ children, title = '', ...rest }, ref) => {
    return (
      <div ref={ref} {...rest}>
        <Helmet>
          <title>{title}</title>
        </Helmet>
        {children}
      </div>
    );
  }
);

Page.propTypes = {
  // @ts-ignore
  children: PropTypes.node.isRequired,
  title: PropTypes.string
};

export default Page;
