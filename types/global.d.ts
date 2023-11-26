declare global {
    namespace NodeJS{
        interface ProcessEnv{
            NEXT_PUBLIC_SUPABASE_URL: string;
            NEXT_PUBLIC_SUPABASE_ANON_KEY: string;
            NEXT_PUBLIC_SUPABASE_APP_BUCKET_IMAGE_FOLDER: string;
            NEXT_PUBLIC_SUPABASE_APP_BUCKET_IMAGE_FOLDER_RESTORED: string;
            NEXT_PUBLIC_SUPABASE_APP_BUCKET_IMAGE_FOLDER_PROCESSING: string;
            NEXT_PUBLIC_SUPABASE_APP_BUCKET_IMAGE_PUBLIC_URL: string;
            NEXT_PUBLIC_SUPABASE_APP_BUCKET_IMAGE_URL: string;

        }
    }
}
export{}