import type { Lang } from '../i18n/dict';
import { fromPayload } from '../content';

/** The single company address used by the footer, the contact form and every pillar page. */
const COMPANY_ADDRESS_FALLBACK: Record<Lang, string> = {
  en: 'Mazoon Square, 5th Floor, Al Khoudh, Muscat, Sultanate of Oman',
  ar: 'مزون سكوير، الطابق الخامس، الخوض، مسقط، سلطنة عُمان',
};

export const COMPANY_ADDRESS = fromPayload('companyAddress', COMPANY_ADDRESS_FALLBACK);
