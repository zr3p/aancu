export type Project = {
  slug: string;
  title: string;
  service: string;
  location: string;
  description: string;
  details: string[];
  image: string;
  imageAlt: string;
  tag: string;
};

export const projects: Project[] = [
  {
    slug: "pressure-washing",
    title: "Driveway Transformation",
    service: "Pressure Washing",
    location: "Morningside, Edinburgh",
    description:
      "A heavily soiled block paving driveway restored to its original condition using commercial-grade pressure washing equipment. Years of moss, algae and traffic grime removed in a single visit.",
    details: [
      "Commercial-grade pressure washing",
      "Block paving and edging cleaned",
      "Moss and algae treatment applied",
      "Same-day completion",
    ],
    image:
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1200&h=800&fit=crop",
    imageAlt: "Clean driveway after pressure washing in Edinburgh",
    tag: "Pressure Washing",
  },
  {
    slug: "garden-maintenance",
    title: "Garden Tidy & Lawn Care",
    service: "Garden Maintenance",
    location: "Stockbridge, Edinburgh",
    description:
      "Regular maintenance visit for a large rear garden. Lawn cut and edged, hedges trimmed, borders weeded and general tidying throughout. Left neat and ready for the season.",
    details: [
      "Lawn cut and edged",
      "Hedge trimming",
      "Border weeding",
      "Green waste removed",
    ],
    image:
      "https://images.unsplash.com/photo-1558904541-efa843a96f01?w=1200&h=800&fit=crop",
    imageAlt: "Neatly maintained garden in Edinburgh",
    tag: "Garden Care",
  },
  {
    slug: "outdoor-clearance",
    title: "Full Garden Clearance",
    service: "Outdoor Clearance",
    location: "Leith, Edinburgh",
    description:
      "Complete clearance of an overgrown rear garden ahead of a property sale. Dense overgrowth, accumulated rubbish and garden waste removed, leaving a blank canvas for the new owners.",
    details: [
      "Full overgrowth removal",
      "Rubbish and waste cleared",
      "All green waste taken away",
      "Area left clear and tidy",
    ],
    image:
      "https://images.unsplash.com/photo-1591857177580-dc82b9ac4e1e?w=1200&h=800&fit=crop",
    imageAlt: "Cleared outdoor space in Edinburgh",
    tag: "Clearance",
  },
  {
    slug: "commercial",
    title: "Commercial Forecourt Clean",
    service: "Commercial",
    location: "Newington, Edinburgh",
    description:
      "Monthly forecourt and car park maintenance for a local business. Pressure washing of paved areas, litter removal and general upkeep carried out early morning before opening hours.",
    details: [
      "Forecourt pressure washing",
      "Car park cleaning",
      "Early morning scheduling",
      "Monthly maintenance contract",
    ],
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&h=800&fit=crop",
    imageAlt: "Clean commercial forecourt in Edinburgh",
    tag: "Commercial",
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}