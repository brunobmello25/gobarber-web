import React, { useCallback, useEffect, useMemo, useState } from 'react';
import DayPicker, { DayModifiers } from 'react-day-picker';
import 'react-day-picker/lib/style.css';

import logo from 'assets/logo.svg';
import { FiClock, FiPower } from 'react-icons/fi';
import { useAuth } from 'hooks/auth';
import { api } from 'services';
import {
  Container,
  Appointment,
  Calendar,
  Content,
  Header,
  HeaderContent,
  NextAppointment,
  Profile,
  Schedule,
  Section,
} from './styles';

interface IMonthAvailabilityItem {
  day: number;
  available: boolean;
}

const Dashboard: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [monthAvailability, setMonthAvailability] = useState<
    IMonthAvailabilityItem[]
  >([]);

  const { signOut, user } = useAuth();

  const handleDayChange = useCallback((day: Date, modifiers: DayModifiers) => {
    if (modifiers.available) {
      setSelectedDate(day);
    }
  }, []);

  const handleMonthChange = useCallback((month: Date) => {
    setCurrentMonth(month);
  }, []);

  useEffect(() => {
    api
      .get(`/providers/${user.id}/month-availability`, {
        params: {
          year: currentMonth.getFullYear(),
          month: currentMonth.getMonth() + 1,
        },
      })
      .then(response => {
        setMonthAvailability(response.data.availability);
      });
  }, [currentMonth, user.id]);

  const disabledDays = useMemo(() => {
    return monthAvailability
      .filter(day => !day.available)
      .map(
        day =>
          new Date(
            currentMonth.getFullYear(),
            currentMonth.getMonth(),
            day.day,
          ),
      );
  }, [currentMonth, monthAvailability]);

  return (
    <Container>
      <Header>
        <HeaderContent>
          <img src={logo} alt="GoBarber" />

          <Profile>
            <img src={user.avatar_url} alt="" />

            <div>
              <span>Bem-vindo,</span>
              <strong>{user.name}</strong>
            </div>
          </Profile>

          <button onClick={signOut} type="button">
            <FiPower />
          </button>
        </HeaderContent>
      </Header>

      <Content>
        <Schedule>
          <h1>Horários agendados</h1>

          <p>
            <span>Hoje</span>
            <span>Dia 06</span>
            <span>Segunda-feira</span>
          </p>

          <NextAppointment>
            <strong>Atendimento a seguir</strong>

            <div>
              <img
                src="https://avatars2.githubusercontent.com/u/29875060?s=460&u=f5829eb4d846ea0adfce9be16d8e4ccd6399047b&v=4"
                alt="Bruno Mello"
              />

              <strong>Bruno Mello</strong>
              <span>
                <FiClock />
                08:00
              </span>
            </div>
          </NextAppointment>

          <Section>
            <strong>Manhã</strong>

            <Appointment>
              <span>
                <FiClock />
                08:00
              </span>

              <div>
                <img
                  src="https://avatars2.githubusercontent.com/u/29875060?s=460&u=f5829eb4d846ea0adfce9be16d8e4ccd6399047b&v=4"
                  alt="Bruno Mello"
                />

                <strong>Bruno Mello</strong>
              </div>
            </Appointment>

            <Appointment>
              <span>
                <FiClock />
                08:00
              </span>

              <div>
                <img
                  src="https://avatars2.githubusercontent.com/u/29875060?s=460&u=f5829eb4d846ea0adfce9be16d8e4ccd6399047b&v=4"
                  alt="Bruno Mello"
                />

                <strong>Bruno Mello</strong>
              </div>
            </Appointment>
          </Section>

          <Section>
            <strong>Tarde</strong>

            <Appointment>
              <span>
                <FiClock />
                08:00
              </span>

              <div>
                <img
                  src="https://avatars2.githubusercontent.com/u/29875060?s=460&u=f5829eb4d846ea0adfce9be16d8e4ccd6399047b&v=4"
                  alt="Bruno Mello"
                />

                <strong>Bruno Mello</strong>
              </div>
            </Appointment>
          </Section>
        </Schedule>
        <Calendar>
          <DayPicker
            weekdaysShort={['D', 'S', 'T', 'Q', 'Q', 'S', 'S']}
            fromMonth={new Date()}
            disabledDays={[{ daysOfWeek: [0, 6] }, ...disabledDays]}
            modifiers={{ available: { daysOfWeek: [1, 2, 3, 4, 5] } }}
            onMonthChange={handleMonthChange}
            months={[
              'Janeiro',
              'Fevereiro',
              'Março',
              'Abril',
              'Maio',
              'Junho',
              'Julho',
              'Agosto',
              'Setembro',
              'Outubro',
              'Novembro',
              'Dezembro',
            ]}
            selectedDays={[selectedDate]}
            onDayClick={handleDayChange}
          />
        </Calendar>
      </Content>
    </Container>
  );
};

export default Dashboard;
