import wrapWithProvider from './wrap-with-provider';

export const wrapRootElement = wrapWithProvider;

export const onInitialClientRender = () => {
  require('./src/styles/index.scss');
};
