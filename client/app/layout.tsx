// The goal is for access token and/or refresh token to be stored in a cookie on Client
// When client requests an authenticated route, they MUST send a token or they will be redirected. 
// therefore the route is dynamically rendered on the server. but with next 13, cached static renders 
// of sub-components can be used, saving compute

// The highest-level dynamic route/component receives the access token and instantiates a Matrix-js-sdk
// client object (on the server). It waits for any data it requests then passes it as props to components that need
// it. 


// Layout needs to check if there is a cookie. Login should refresh so the check happens again

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
