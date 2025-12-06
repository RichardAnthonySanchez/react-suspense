# React 19 Suspense Improvements - Testing Guide

**Status:** 🚧 Work in Progress - Testing behavior and performance improvements.

## Overview

This test compares three common approaches to loading data in React/Next.js applications, each with different tradeoffs between initial page load speed, time to interactivity, and perceived performance.

- **Client-Side Fetching**
- **Server-Side Rendering**
- **Server Rendering with Suspense & Streaming**

The test evaluates which pattern best balances load time, interactivity, and user experience across different scenarios.

## Quick Summary

| Pattern                         | Time to First Content               | Time to Interactivity | Best Use Case                     |
| ------------------------------- | ----------------------------------- | --------------------- | --------------------------------- |
| **useEffect Client Fetching**   | Medium (render UI then fetch)       | 3.1s / 900ms          | Internal tools, simple pages      |
| **Server-Side Rendering**       | Slowest (blank screen to full page) | 4.6s / 1.4s           | SEO, complete data requirements   |
| **Server + Suspense Streaming** | Fastest (perceived)                 | 3.8s / 800ms          | Public apps, user-facing products |

The streaming pattern with Suspense has become the modern best practice for Next.js applications because it optimizes for perceived performance—users see something immediately while the full content loads gracefully in the background.

## Project Goals

- [x] Set up React 19 project with Suspense boundaries
- [x] Build skeleton loader component (fast, lightweight)
- [x] Create data fetching component with JSONPlaceholder & Picsum
- [x] Test different suspend scenarios
- [ ] Measure performance improvements
- [ ] Document best practices for Suspense in React 19

## Setup

### Installation

```bash
npm install
```

### Dependencies

- `react@^19.2.0` - React with Suspense improvements
- `react-dom@^19.2.0` - DOM rendering
- JSONPlaceholder & Picsum - Free fake API for testing

## Architecture

### Components

**Skeleton Loader**

- Lightweight placeholder that renders immediately
- CSS-based shimmer animation for perceived loading
- Adapts to content shape (post list, user card, comment thread)

**Data Fetcher**

- Wraps async data operations (JSONPlaceholder & Picsum API calls)
- Throws promise during data fetch (Suspense integration)
- Resolves to component with real data when ready

**Suspense Boundary**

- Wraps fetchable components
- Shows skeleton loader as fallback
- Manages transition from fallback to real content

### Data Flow

```
User Action
    ↓
Suspense Boundary shows Skeleton Loader (immediately)
    ↓
React pre-warms fetch in background
    ↓
Data resolves
    ↓
Content replaces skeleton (smooth transition)
```

## Performance Metrics to Track

- [ ] Time to skeleton render (TTSR)
- [ ] Time to content ready (TTR)
- [ ] Perceived load time
- [ ] Network waterfall chart
- [ ] Re-render count

## Resources

- [React 19 Suspense Improvements](https://react.dev/blog/2024/04/25/react-19-upgrade-guide#improvements-to-suspense)
- [use React API Documentation](https://react.dev/reference/react/use#streaming-data-from-server-to-client)
- [Comprehensive Look At Server Component Performance by Nadia Makarevich](https://www.developerway.com/posts/react-server-components-performance)
- [The Progression of Fetching Data in React by ByteGrad](https://youtu.be/bKm1rNaCFOo?si=OgmS2Z8NhH-Zhxcd)
- [More Shootouts with Suspense by Jack Herrington](https://youtu.be/sgnw8dRZa3Q?si=uoCXvcyHzoCxUKrE)
- [JSONPlaceholder API](https://JSONPlaceholder.typicode.com/)
- [Picsum API](https://picsum.photos/)
