import { useId } from 'react'

export function LogoMark({ size = 36, className = '' }) {
  const gradientId = useId()

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <rect width="40" height="40" rx="11" fill={`url(#${gradientId})`} />
      <path
        d="M12 20C12 15.6 15.6 12 20 12C22.4 12 24.6 13 26.2 14.6L23.5 17.3C22.6 16.5 21.4 16 20 16C17.8 16 16 17.8 16 20C16 22.2 17.8 24 20 24C21.4 24 22.6 23.5 23.5 22.7L26.2 25.4C24.6 27 22.4 28 20 28C15.6 28 12 24.4 12 20Z"
        fill="white"
      />
      <path
        d="M24 20H28M28 20L26.2 18.2M28 20L26.2 21.8"
        stroke="white"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <defs>
        <linearGradient id={gradientId} x1="3" y1="4" x2="37" y2="36">
          <stop stopColor="#2563eb" />
          <stop offset="0.52" stopColor="#7c3aed" />
          <stop offset="1" stopColor="#0f766e" />
        </linearGradient>
      </defs>
    </svg>
  )
}

export function NoteIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path d="M7 4.75H17C18.24 4.75 19.25 5.76 19.25 7V20.25L16.5 18.75L13.75 20.25L11 18.75L8.25 20.25L4.75 18.35V7C4.75 5.76 5.76 4.75 7 4.75Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
      <path d="M8 9H16M8 12.5H14.5M8 16H12" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  )
}

export function QuizIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path d="M12 21.25C17.11 21.25 21.25 17.11 21.25 12C21.25 6.89 17.11 2.75 12 2.75C6.89 2.75 2.75 6.89 2.75 12C2.75 17.11 6.89 21.25 12 21.25Z" stroke="currentColor" strokeWidth="1.7" />
      <path d="M9.55 9.35C9.79 8.05 10.82 7.2 12.22 7.2C13.75 7.2 14.8 8.15 14.8 9.45C14.8 10.55 14.2 11.13 13.18 11.75C12.36 12.24 12 12.72 12 13.65V14.05" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      <path d="M12 17.05V17.15" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
    </svg>
  )
}

export function BulbIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path d="M8.6 15.25C7.45 14.26 6.75 12.79 6.75 11.18C6.75 8.23 9.1 5.75 12 5.75C14.9 5.75 17.25 8.23 17.25 11.18C17.25 12.79 16.55 14.26 15.4 15.25C14.77 15.79 14.5 16.33 14.5 17V17.25H9.5V17C9.5 16.33 9.23 15.79 8.6 15.25Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
      <path d="M10 20H14M10.25 17.25H13.75M12 2.75V3.9M4.95 5.4L5.77 6.22M19.05 5.4L18.23 6.22" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  )
}

export function CalendarIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path d="M7.25 3.75V6.25M16.75 3.75V6.25M4.75 9.25H19.25M7 5.25H17C18.24 5.25 19.25 6.26 19.25 7.5V17.25C19.25 18.49 18.24 19.5 17 19.5H7C5.76 19.5 4.75 18.49 4.75 17.25V7.5C4.75 6.26 5.76 5.25 7 5.25Z" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M8 12.75H10.25V15H8V12.75Z" fill="currentColor" />
    </svg>
  )
}

export function SendIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path d="M4.25 5.25L20 12L4.25 18.75L6.9 12L4.25 5.25Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      <path d="M7.25 12H13.25" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  )
}

export function SunIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path d="M12 16.25C14.35 16.25 16.25 14.35 16.25 12C16.25 9.65 14.35 7.75 12 7.75C9.65 7.75 7.75 9.65 7.75 12C7.75 14.35 9.65 16.25 12 16.25Z" stroke="currentColor" strokeWidth="1.7" />
      <path d="M12 3.25V4.75M12 19.25V20.75M20.75 12H19.25M4.75 12H3.25M18.2 5.8L17.14 6.86M6.86 17.14L5.8 18.2M18.2 18.2L17.14 17.14M6.86 6.86L5.8 5.8" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  )
}

export function MoonIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path d="M20 14.45C18.93 17.35 16.14 19.42 12.87 19.42C8.67 19.42 5.25 16 5.25 11.8C5.25 8.53 7.32 5.74 10.22 4.67C9.88 5.55 9.7 6.51 9.7 7.51C9.7 11.6 13.02 14.92 17.11 14.92C18.12 14.92 19.07 14.74 20 14.45Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
    </svg>
  )
}

export function LogOutIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path d="M10.25 6.75H6.75C5.65 6.75 4.75 7.65 4.75 8.75V15.25C4.75 16.35 5.65 17.25 6.75 17.25H10.25M14.75 8.25L18.5 12L14.75 15.75M18.25 12H10.25" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function ArrowLeftIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path d="M10.25 6.75L5 12L10.25 17.25M5.75 12H19" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function ArrowRightIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path d="M13.75 6.75L19 12L13.75 17.25M18.25 12H5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function SparkIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path d="M12 3.75L13.52 8.48L18.25 10L13.52 11.52L12 16.25L10.48 11.52L5.75 10L10.48 8.48L12 3.75Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
      <path d="M18 15.75L18.65 17.35L20.25 18L18.65 18.65L18 20.25L17.35 18.65L15.75 18L17.35 17.35L18 15.75Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
  )
}

export function CheckIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path d="M5.75 12.25L10 16.5L18.5 7.5" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function UserIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path d="M12 12.25C14.35 12.25 16.25 10.35 16.25 8C16.25 5.65 14.35 3.75 12 3.75C9.65 3.75 7.75 5.65 7.75 8C7.75 10.35 9.65 12.25 12 12.25Z" stroke="currentColor" strokeWidth="1.7" />
      <path d="M4.75 20.25C5.42 16.84 8.36 14.75 12 14.75C15.64 14.75 18.58 16.84 19.25 20.25" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  )
}

export function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path d="M5.75 6.75H18.25C19.35 6.75 20.25 7.65 20.25 8.75V16.25C20.25 17.35 19.35 18.25 18.25 18.25H5.75C4.65 18.25 3.75 17.35 3.75 16.25V8.75C3.75 7.65 4.65 6.75 5.75 6.75Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
      <path d="M5.25 8.25L12 13.25L18.75 8.25" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function LockIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path d="M7.75 10V8.25C7.75 5.9 9.65 4 12 4C14.35 4 16.25 5.9 16.25 8.25V10M7 10H17C18.1 10 19 10.9 19 12V18C19 19.1 18.1 20 17 20H7C5.9 20 5 19.1 5 18V12C5 10.9 5.9 10 7 10Z" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M12 14V16" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  )
}
