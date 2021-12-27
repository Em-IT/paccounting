// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function capsulateData(data: any, error?: any) {
  const result = {
    data: null,
    isSuccessful: true,
    errorMessage: '',
  };
  if (error) {
    result.errorMessage = error.toString();
    result.isSuccessful = false;
  } else {
    result.data = data;
  }
  return result;
}
