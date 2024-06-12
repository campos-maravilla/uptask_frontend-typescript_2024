import ProfileForm from "@/components/profile/ProfileForm";
import { useAuth } from "@/hooks/useAuth";

export default function ProfileView() {
  //no se usa error porque ya lo tiene AppLayout,y si hay error lo manda a login
  const { data, isLoading } = useAuth();

  if (isLoading) return "Cargando...";

  if (data) return <ProfileForm data={data} />;
}
