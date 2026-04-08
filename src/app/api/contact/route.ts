import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const formData = await request.formData();
    // Similar to apply, mock email/contact submission.
    
    return NextResponse.redirect(new URL('/thank-you', request.url));
  } catch (error) {
    return NextResponse.redirect(new URL('/contact?error=1', request.url));
  }
}
