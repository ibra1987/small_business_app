import { type NextRequest } from 'next/server'
import { updateSession } from  "./config/supabase/middleware"


const protectedRoutes = ["/in"]
export async function middleware(request: NextRequest) {
  if(protectedRoutes.some((route) => request.nextUrl.pathname.startsWith(route))) {
    return updateSession(request)
}
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * Feel free to modify this pattern to include more paths.
     */
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
}