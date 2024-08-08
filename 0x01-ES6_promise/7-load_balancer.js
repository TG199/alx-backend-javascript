export default function loadBalancer(chinaDownload, USDownload) {
  const result = [chinaDownload, USDownload];
  return Promise.race(result);
}
