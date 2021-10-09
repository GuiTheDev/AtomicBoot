// Type definitions for google-image 1.0.0
// Project: google-image
// Definitions by: MarsRon <https://marsron.github.io>

export = GoogleImage

declare function GoogleImage (
  query: string,
  options?: GoogleImage.GoogleImageOptions
): Promise<GoogleImage.GoogleImageResult[]>

declare function GoogleImage (
  query: GoogleImage.GoogleImageOptions
): Promise<GoogleImage.GoogleImageResult[]>

export interface GoogleImageOptions {
  query?: string
  limit?: number
  additionalQuery?: Record
  blacklistDomains?: string[]
}

export interface GoogleImageResult {
  url: string
  height: number
  width: number
}
