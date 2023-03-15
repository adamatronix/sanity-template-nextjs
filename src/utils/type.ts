import { css } from 'styled-components';
import { media } from 'utils/mediaQuery';

export const type = (type:string) => {

  const types = {
    heading01: css`
      font-weight: normal;
      font-size: 68px;
      line-height: 76px;
    `,
    heading02: css`
      font-weight: normal;
      font-size: 42px;
      line-height: 52px;
    `,
    heading03: css`
      font-weight: normal;
      font-size: 26px;
      line-height: 32px;

      ${() => media("small")(`
        font-size: 30px;
        line-height: 36px;
      `)}
    `,
    heading04: css`
      font-weight: normal;
      font-size: 28px;
      line-height: 36px;
    `,
    heading05: css`
      font-weight: normal;
      font-size: 20px;
      line-height: 26px;

      ${() => media("small")(`
        font-size: 24px;
        line-height: 32px;
      `)}
    `,
    sub02: css`
      font-weight: normal;
      font-size: 20px;
      line-height: 28px;
    `,
    sub01: css`
      font-weight: normal;
      font-size: 18px;
      line-height: 24px;
    `,
    body02: css`
      font-weight: normal;
      font-size: 16px;
      line-height: 22px;
    `,
    body01: css`
      font-weight: normal;
      font-size: 14px;
      line-height: 20px;
    `,
    caption01: css`
      font-weight: normal;
      font-size: 12px;
      line-height: 18px;
    `,
    metadata01: css`
      font-weight: normal;
      font-size: 10px;
      line-height: 12px;
    `
  }

  return types[type as keyof typeof types];
}