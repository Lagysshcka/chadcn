import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import {
  MessageCircle,
  PhoneCall,
  Video,
  ShieldCheck,
  Users,
  Smile,
  Mic,
  Send,
  Twitter,
  Github,
  Linkedin,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";
import type React from "react";

export default function CommunicationPage() {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,_oklch(0.97_0_0),_oklch(0.9_0_0))] text-foreground">
      <main className="container mx-auto max-w-6xl px-4 py-6 md:py-10 space-y-10 md:space-y-14">
        {/* Шапка сайта */}
        <header className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground shadow-sm">
              NT
            </span>
            <div>
              <p className="text-sm font-semibold leading-tight">Nova Talk</p>
              <p className="text-xs text-muted-foreground">
                Одно место для всех ваших разговоров
              </p>
            </div>
          </div>

          <nav className="hidden items-center gap-6 text-sm text-muted-foreground md:flex">
            <Link href="#features" className="transition hover:text-foreground">
              Особенности
            </Link>
            <Link href="#modes" className="transition hover:text-foreground">
              Форматы общения
            </Link>
            <Link href="#safety" className="transition hover:text-foreground">
              Безопасность
            </Link>
          </nav>

          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm">
              Войти
            </Button>
            <Button size="sm">
              Создать комнату
              <ArrowRight className="ml-1 h-4 w-4" />
            </Button>
          </div>
        </header>

        {/* Hero-блок: слева текст, справа превью чата */}
        <section className="grid items-start gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1.1fr)]">
          <div className="space-y-6">
            <div className="space-y-4">
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                Общение без шума
              </p>
              <h1 className="text-3xl font-semibold leading-tight md:text-4xl">
                Одностраничное пространство,
                <br className="hidden md:block" /> где команда общается и
                согласует решения.
              </h1>
              <p className="max-w-xl text-sm text-muted-foreground md:text-base">
                Личные сообщения, групповые комнаты и созвоны — всё в одном чистом интерфейсе.
                Подходит для быстрых обсуждений, созвонов по ссылке и асинхронной переписки.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <Button>
                Начать общение
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline">
                Создать комнату гостевого доступа
              </Button>
            </div>

            <div className="flex flex-wrap gap-3 pt-2 text-xs md:text-sm">
              <StatPill icon={<Users className="h-3.5 w-3.5" />} label="Команды" value="120+" />
              <StatPill
                icon={<MessageCircle className="h-3.5 w-3.5" />}
                label="Сообщений в день"
                value="50K+"
              />
              <StatPill
                icon={<Video className="h-3.5 w-3.5" />}
                label="Созвонов без регистрации"
                value="Мгновенно"
              />
            </div>

            <p className="text-xs text-muted-foreground">
              Не требует установки: достаточно одной ссылки, чтобы подключить коллегу к диалогу.
            </p>
          </div>

          {/* Превью чата */}
          <Card className="border border-border/70 bg-background/90 shadow-lg backdrop-blur">
            <CardContent className="space-y-4 p-4 sm:p-5">
              <div className="flex items-center justify-between gap-2">
                <div>
                  <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                    Комната
                  </p>
                  <p className="text-sm font-medium">Дизайн‑ревью · Спринт 12</p>
                </div>
                <div className="flex items-center gap-1.5">
                  <Button
                    variant="outline"
                    size="icon"
                    className="h-8 w-8"
                    aria-label="Голосовой звонок"
                  >
                    <PhoneCall className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="h-8 w-8"
                    aria-label="Видео звонок"
                  >
                    <Video className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <div className="flex items-center justify-between gap-2 rounded-lg bg-muted/60 px-3 py-2">
                <div className="flex -space-x-2">
                  <Avatar className="h-7 w-7 border border-background">
                    <AvatarImage src="https://github.com/shadcn.png" alt="Участник" />
                    <AvatarFallback>IP</AvatarFallback>
                  </Avatar>
                  <Avatar className="h-7 w-7 border border-background">
                    <AvatarFallback>AL</AvatarFallback>
                  </Avatar>
                  <Avatar className="h-7 w-7 border border-background">
                    <AvatarFallback>MK</AvatarFallback>
                  </Avatar>
                </div>
                <p className="text-xs text-muted-foreground">
                  5 человек онлайн · Синхронизация в реальном времени
                </p>
              </div>

              <div className="space-y-2 rounded-lg border border-border/70 bg-background p-3 text-xs">
                <MessageBubble
                  author="Иван"
                  time="10:14"
                  content="Чат"
                />
              </div>

              <div className="flex items-center gap-2 rounded-lg border border-border/70 bg-background px-2 py-1.5">
                <button
                  type="button"
                  className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-muted text-muted-foreground"
                  aria-label="Добавить реакцию"
                >
                  <Smile className="h-4 w-4" />
                </button>
                <input
                  className="h-8 flex-1 bg-transparent text-xs outline-none placeholder:text-muted-foreground"
                  placeholder="Напишите сообщение для команды…"
                />
                <button
                  type="button"
                  className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-muted text-muted-foreground"
                  aria-label="Включить микрофон"
                >
                  <Mic className="h-4 w-4" />
                </button>
                <Button size="icon" className="h-8 w-8" aria-label="Отправить сообщение">
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Форматы общения (табы) */}
        <section id="modes" className="space-y-4">
          <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                Форматы общения
              </p>
              <h2 className="text-lg font-semibold">Один интерфейс — разные сценарии общения</h2>
            </div>
            <p className="max-w-md text-xs text-muted-foreground md:text-sm">
              Переключайтесь между личными сообщениями, групповыми комнатами и созвонами, не
              меняя контекст и вкладки в браузере.
            </p>
          </div>

          <Card className="border border-border/70 bg-background/90 backdrop-blur">
            <CardContent className="pt-5">
              <Tabs defaultValue="direct" className="w-full">
                <TabsList className="mb-4 w-full justify-start">
                  <TabsTrigger value="direct">Личные чаты</TabsTrigger>
                  <TabsTrigger value="groups">Группы</TabsTrigger>
                  <TabsTrigger value="rooms">Комнаты</TabsTrigger>
                  <TabsTrigger value="community">Сообщества</TabsTrigger>
                </TabsList>

                <TabsContent
                  value="direct"
                  className="mt-1 space-y-2 text-sm text-muted-foreground"
                >
                  <p>
                    Обсуждайте детали один на один: согласование задач, ревью макетов, быстрые
                    уточнения. Сообщения доставляются мгновенно, а история — всегда под рукой.
                  </p>
                </TabsContent>

                <TabsContent
                  value="groups"
                  className="mt-1 space-y-2 text-sm text-muted-foreground"
                >
                  <p>
                    Соберите продуктовую команду, стейкхолдеров и разработчиков в одном групповом
                    чате. Закрепляйте важные сообщения, создавайте треды и делитесь файлами.
                  </p>
                </TabsContent>

                <TabsContent
                  value="rooms"
                  className="mt-1 space-y-2 text-sm text-muted-foreground"
                >
                  <p>
                    Создавайте комнаты «по ссылке» для созвонов с клиентами, фрилансерами и
                    кандидатами. Не нужно регистрироваться — просто делитесь ссылкой.
                  </p>
                </TabsContent>

                <TabsContent
                  value="community"
                  className="mt-1 space-y-2 text-sm text-muted-foreground"
                >
                  <p>
                    Стройте сообщества вокруг продукта или команды: тематические каналы, анонсы,
                    закрытые группы и публичные обсуждения в едином пространстве.
                  </p>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </section>

        {/* Особенности и безопасность */}
        <section
          id="features"
          className="grid gap-6 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] md:items-start"
        >
          <div className="space-y-4">
            <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
              Особенности
            </p>
            <h2 className="text-lg font-semibold">Сделано для живого общения, а не для шума</h2>
            <p className="max-w-xl text-sm text-muted-foreground">
              Мы убрали всё лишнее, оставив только то, что помогает решать задачи. Без бесконечных
              меню, сложных настроек и десятков скрытых экранов.
            </p>

            <div className="grid gap-4 sm:grid-cols-2">
              <FeatureCard
                icon={<MessageCircle className="h-4 w-4" />}
                title="Фокус на диалоге"
                description="Сообщения, реакции и вложения — в одном чистом потоке без визуального шума."
              />
              <FeatureCard
                icon={<PhoneCall className="h-4 w-4" />}
                title="Созвоны по ссылке"
                description="Создайте комнату и отправьте ссылку — собеседник подключится в один клик."
              />
              <FeatureCard
                icon={<Video className="h-4 w-4" />}
                title="Видео, когда нужно"
                description="Включайте экран и видео только там, где это помогает объяснить идею быстрее."
              />
              <FeatureCard
                icon={<ShieldCheck className="h-4 w-4" />}
                title="Безопасность по умолчанию"
                description="Защищённые соединения и приватные комнаты, к которым есть доступ только по ссылке."
              />
            </div>
          </div>

          <Card
            id="safety"
            className="border border-border/70 bg-background/90 shadow-sm backdrop-blur md:mt-7"
          >
            <CardContent className="space-y-4 pt-5">
              <div className="flex items-center gap-2">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <ShieldCheck className="h-4 w-4" />
                </span>
                <div>
                  <p className="text-sm font-medium">Приватность и контроль доступа</p>
                  <p className="text-xs text-muted-foreground">
                    Вы решаете, кто может войти в комнату и что видно снаружи.
                  </p>
                </div>
              </div>

              <ul className="space-y-2 text-xs text-muted-foreground">
                <li>• Комнаты только по ссылке или по приглашению.</li>
                <li>• Возможность быстро отключить микрофон и камеру для всех.</li>
                <li>• Уведомления только о действительно важных событиях.</li>
              </ul>

              <div className="rounded-lg bg-muted/60 px-3 py-2 text-xs">
                <p className="font-medium text-foreground">Совет по онбордингу команды</p>
                <p className="mt-1 text-muted-foreground">
                  Начните с одной комнаты для всей команды и пары личных чатов. Остальное появится
                  по мере необходимости — без хаоса и сотен каналов с первого дня.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>

      {/* Подвал */}
      <footer className="border-t border-border/60 bg-background/90 backdrop-blur">
        <div className="container mx-auto max-w-6xl px-4 py-6 text-sm text-muted-foreground">
          <div className="flex flex-col items-start gap-4 md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-2">
              <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground shadow-sm">
                NT
              </span>
              <span className="font-semibold text-foreground">Nova Talk</span>
              <span>© 2026 Nova Talk. Все права защищены.</span>
            </div>

            <div className="hidden h-4 w-px bg-border md:block" />

            <div className="flex flex-wrap items-center gap-4">
              <Link href="/about" className="transition hover:text-foreground">
                О нас
              </Link>
              <Link href="/support" className="transition hover:text-foreground">
                Поддержка
              </Link>
              <Link href="/blog" className="transition hover:text-foreground">
                Блог
              </Link>
              <Link href="/careers" className="transition hover:text-foreground">
                Вакансии
              </Link>
            </div>

            <div className="hidden h-4 w-px bg-border md:block" />

            <div className="flex items-center gap-4 text-xs">
              <Link
                href="/privacy"
                className="text-muted-foreground transition hover:text-foreground"
              >
                Конфиденциальность
              </Link>
              <span className="text-muted-foreground">·</span>
              <Link
                href="/terms"
                className="text-muted-foreground transition hover:text-foreground"
              >
                Условия использования
              </Link>
            </div>

            <div className="flex items-center gap-3">
              <Link
                href="#"
                className="text-muted-foreground transition hover:text-foreground"
                aria-label="Профиль в Twitter"
              >
                <Twitter className="h-4 w-4" />
              </Link>
              <Link
                href="#"
                className="text-muted-foreground transition hover:text-foreground"
                aria-label="Профиль на GitHub"
              >
                <Github className="h-4 w-4" />
              </Link>
              <Link
                href="#"
                className="text-muted-foreground transition hover:text-foreground"
                aria-label="Профиль в LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

// Вспомогательные компоненты
function StatPill({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full bg-background/80 px-3 py-1 text-xs shadow-sm ring-1 ring-border/60">
      <span className="flex h-5 w-5 items-center justify-center rounded-full bg-primary/10 text-primary">
        {icon}
      </span>
      <span className="font-medium text-foreground">{value}</span>
      <span className="text-[0.7rem] uppercase tracking-[0.16em] text-muted-foreground">
        {label}
      </span>
    </div>
  );
}

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="flex gap-3 rounded-xl border border-border/70 bg-background/90 p-3 text-xs shadow-sm">
      <span className="mt-0.5 inline-flex h-7 w-7 items-center justify-center rounded-full bg-muted text-muted-foreground">
        {icon}
      </span>
      <div className="space-y-1">
        <p className="text-sm font-medium text-foreground">{title}</p>
        <p className="text-muted-foreground">{description}</p>
      </div>
    </div>
  );
}

function MessageBubble({
  author,
  time,
  content,
  isOwn,
}: {
  author: string;
  time: string;
  content: string;
  isOwn?: boolean;
}) {
  return (
    <div
      className={`flex flex-col gap-0.5 ${
        isOwn ? "items-end text-right" : "items-start text-left"
      }`}
    >
      <div className="flex items-baseline gap-1 text-[0.7rem] text-muted-foreground">
        <span className="font-medium text-foreground">{author}</span>
        <span>·</span>
        <span>{time}</span>
      </div>
      <div
        className={`max-w-[90%] rounded-lg px-3 py-2 text-[0.78rem] ${
          isOwn
            ? "bg-primary text-primary-foreground"
            : "bg-muted text-foreground"
        }`}
      >
        {content}
      </div>
    </div>
  );
}