import type { Equal, IsTrue } from "@type-challenges/utils";

type cases = [
  IsTrue<Equal<LengthOfString2<"">, 0>>,
  IsTrue<Equal<LengthOfString2<"1">, 1>>,
  IsTrue<Equal<LengthOfString2<"12">, 2>>,
  IsTrue<Equal<LengthOfString2<"123">, 3>>,
  IsTrue<Equal<LengthOfString2<"1234">, 4>>,
  IsTrue<Equal<LengthOfString2<"12345">, 5>>,
  IsTrue<Equal<LengthOfString2<"123456">, 6>>,
  IsTrue<Equal<LengthOfString2<"1234567">, 7>>,
  IsTrue<Equal<LengthOfString2<"12345678">, 8>>,
  IsTrue<Equal<LengthOfString2<"123456789">, 9>>,
  IsTrue<Equal<LengthOfString2<"1234567890">, 10>>,
  IsTrue<Equal<LengthOfString2<"12345678901">, 11>>,
  IsTrue<Equal<LengthOfString2<"123456789012">, 12>>,
  IsTrue<Equal<LengthOfString2<"1234567890123">, 13>>,
  IsTrue<Equal<LengthOfString2<"12345678901234">, 14>>,
  IsTrue<Equal<LengthOfString2<"123456789012345">, 15>>,
  IsTrue<Equal<LengthOfString2<"1234567890123456">, 16>>,
  IsTrue<Equal<LengthOfString2<"12345678901234567">, 17>>,
  IsTrue<Equal<LengthOfString2<"123456789012345678">, 18>>,
  IsTrue<Equal<LengthOfString2<"1234567890123456789">, 19>>,
  IsTrue<Equal<LengthOfString2<"12345678901234567890">, 20>>,
  IsTrue<Equal<LengthOfString2<"123456789012345678901">, 21>>,
  IsTrue<Equal<LengthOfString2<"1234567890123456789012">, 22>>,
  IsTrue<Equal<LengthOfString2<"12345678901234567890123">, 23>>,
  IsTrue<
    Equal<
      LengthOfString2<"aaaaaaaaaaaaggggggggggggggggggggkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa">,
      272
    >
  >
];