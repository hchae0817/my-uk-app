export const formService = {
  submitEmail,
};

function submitEmail(emailData: any) {
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(emailData),
  };

  return fetch("api/submit", requestOptions);
}
