

import { NextResponse } from 'next/server'
import { revalidateTag } from 'next/cache'
 
export async function GET(request) {
    let secret = request.nextUrl.searchParams.get('secret')
    if (secret !== process.env.MY_SECRET_TOKEN) {
      return NextResponse.json({ message: 'Invalid token' })
      }
  revalidateTag("/blogs")
  return NextResponse.json({ revalidated: true, now: Date.now() })
}
