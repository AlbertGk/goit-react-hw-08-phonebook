import ReactLoading from 'react-loading';

export const Loader = ({ type, color }) => (
  <div className={''}>
    <ReactLoading type={type} color={color} height={100} width={100} />
  </div>
);
