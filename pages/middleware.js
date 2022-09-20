import { NextResponse } from 'next/server'

export function middleware() {   
  const url = request.nextUrl.clone()   
  if (url.pathname.includes("Search%3F=")) {
    url.pathname = url.pathname.replace("Search%3F","Search?")
    return NextResponse.redirect(url)   
  } 
}
