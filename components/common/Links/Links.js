import React from "react"
import Link from "next/link"

export function Links() {

    let containerStyle = {
      textAlign: 'center'
    };

    return (
      <div style={containerStyle}>
        <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
              margin: '0 20px'
            }}
            href={`/`}
          >
            Home
        </Link>
        <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
              margin: '0 20px'
            }}
            href={`/about`}
          >
            About
          </Link>
      </div>
    );

}