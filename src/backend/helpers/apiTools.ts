// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function capsulateData(data: any, total?: number, error?: any) {
  const result = {
    data: null,
    total: 0,
    isSuccessful: true,
    errorMessage: '',
  };
  if (error) {
    result.errorMessage = error.toString();
    result.isSuccessful = false;
  } else {
    result.data = data;
    result.total = total || 1;
  }
  return result;
}
