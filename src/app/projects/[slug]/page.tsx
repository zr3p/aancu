import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { getProjectBySlug, projects } from "@/lib/projects";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};

  return {
    title: `${project.title} | aancu Edinburgh`,
    description: project.description,
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) notFound();

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Image */}
      <div className="relative h-[50vh] md:h-[60vh] w-full">
        <Image
          src={project.image}
          alt={project.imageAlt}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary-green/80 via-primary-green/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
          <div className="container-max">
            <span className="inline-block font-mono text-sm text-secondary-green tracking-wider uppercase mb-3">
              {project.service}
            </span>
            <h1 className="text-3xl md:text-5xl font-heading font-bold text-white">
              {project.title}
            </h1>
            <p className="text-white/70 font-body mt-2">{project.location}</p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container-max py-16 md:py-24">
        <div className="grid md:grid-cols-3 gap-12 max-w-5xl">
          {/* Description */}
          <div className="md:col-span-2 space-y-8">
            <p className="text-lg text-dark/70 font-body leading-relaxed">
              {project.description}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="/#contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-primary-green text-white font-body font-medium rounded-lg hover:bg-secondary-green transition-all duration-300"
              >
                Get a Free Quote
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <Link
                href="/"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-primary-green text-primary-green font-body font-medium rounded-lg hover:bg-primary-green hover:text-white transition-all duration-300"
              >
                ← Back to home
              </Link>
            </div>
          </div>

          {/* Details */}
          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 h-fit">
            <h3 className="font-heading font-semibold text-dark mb-6">
              What we did
            </h3>
            <ul className="space-y-3">
              {project.details.map((detail) => (
                <li key={detail} className="flex items-start gap-3 font-body text-dark/70">
                  <svg className="w-5 h-5 text-secondary-green mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {detail}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}