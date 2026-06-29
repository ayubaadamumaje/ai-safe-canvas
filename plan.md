# Plan: EduBridge Yobe - National Curriculum Expansion & Offline-First Core

Implementation plan for expanding "EduBridge Yobe" to support the full Nigerian national curriculum (JSS1-SS3) with an offline-first architecture.

## Scope Summary
- **Curriculum Expansion:** Implement data structures and UI for all JSS1-SS3 subjects across Science, Commercial, and Arts departments.
- **Offline-First Foundation:** Set up Service Workers (PWA) and local storage (IndexedDB via Dexie.js or similar) for core educational content.
- **Exam Preparation:** Scaffolding for WAEC, NECO, and JAMB practice modules.
- **Sync Center:** Enhance the existing `SyncCenter` to handle delta updates and conflict resolution.

## Auth & RLS model
**Auth in scope:** yes
**Model:** supabase_auth
**RLS strategy:** `auth.uid()` based policies for student progress, notes, and personalized learning paths.
**Frontend implication:** Toast errors on RLS denial; local-first data will be synced with Supabase when online.

## Migration baseline
**Local migrations in project:** none
**User confirmed proceed on connected DB:** no (Supabase connection required)

## Affected Areas
- `src/data/curriculum.ts`: Central repository for subject metadata.
- `src/pages/learning/CurriculumExplorer.tsx`: UI for navigating the expanded subject list.
- `src/pages/learning/SyncCenter.tsx`: Logic for managing offline/online state and data persistence.
- `public/sw.js`: Service worker for asset and data caching.
- `src/lib/db.ts`: Local database schema (IndexedDB).

## Phases

### Phase 1: Database & Schema (supabase_engineer)
- Design tables for `subjects`, `topics`, `lessons`, and `student_progress`.
- Implement RLS policies for per-user progress tracking.
- Create edge functions for curriculum synchronization if complex filtering is needed.
**Status:** Blocked (Waiting for Supabase Connection)

### Phase 2: Offline-First Infrastructure (frontend_engineer)
- Install `@supabase/supabase-js`.
- Configure `vite-plugin-pwa` for Service Worker generation.
- Implement `src/lib/db.ts` using `dexie` for local curriculum storage.
- Create a `useOfflineStatus` hook to toggle app behavior based on connectivity.

### Phase 3: Curriculum Content Expansion (frontend_engineer)
- Update `src/data/curriculum.ts` with the full list of Nigerian subjects (Junior/Senior Secondary).
- Build the `CurriculumExplorer` to handle nested categories (Department -> Class -> Subject -> Topic).

### Phase 4: Exam Prep & Sync Logic (frontend_engineer)
- Implement `PracticeCenter` scaffolding for WAEC/NECO/JAMB.
- Finalize `SyncCenter` to allow users to "Download for Offline" specific subjects/topics.

## Execution Handoff

**Plan status:** blocked
**Blocked reason:** This project requires a Supabase database connection for persistent storage of student progress, curriculum data, and auth. The AI has repeatedly requested a connection.

**Dispatch order:**
1. supabase_engineer — Schema and RLS (Once connected)
2. frontend_engineer — PWA, LocalDB, and UI Expansion

**Per-agent instructions:**
### 1. supabase_engineer
- **Phases:** 1
- **Scope:** Create schema for `curriculum` (subjects/topics) and `progress`. Setup RLS.
- **Depends on:** Supabase Connection
- **Acceptance criteria:** Tables exist, RLS allows users to read curriculum and read/write their own progress only.

### 2. frontend_engineer
- **Phases:** 2, 3, 4
- **Scope:** PWA setup, IndexedDB integration, UI for full curriculum, and Sync logic.
- **Files:** `src/data/curriculum.ts`, `src/lib/db.ts`, `src/pages/learning/SyncCenter.tsx`
- **Depends on:** Phase 1
- **Acceptance criteria:** App works offline; users can navigate all subjects; progress saves locally and syncs when online.

**Do not dispatch:** Phase 1 until Supabase is connected.
