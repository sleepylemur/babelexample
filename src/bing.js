export default function greeting() {
  // example of how envify works
  if (process.env.NODE_ENV === 'development') {
    console.log('development build');
  }
  return 'bing!';
}
