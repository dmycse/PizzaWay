/**
 * Template for sending a verification email to a user.
 *
 * The template takes in a single prop, `code`, which is a string representing
 * the verification code that the user must enter to confirm their registration.
 *
 * The template displays the verification code in a heading and provides a link
 * to the `/api/auth/verify` endpoint with the code as a query parameter.
 *
 * The endpoint should be configured to verify the user's email address and
 * log them in after successful verification.
 */
export const VerificationUserTemplate = ({ code }: { code: string }) => (
  <div>
    <p>
      Confirmation code: <h2>{code}</h2>
    </p>

    <p>
      <a href={`${process.env.NEXT_PUBLIC_URL}/api/auth/verify?code=${code}`}>Confirm registration</a>
    </p>
  </div>
);